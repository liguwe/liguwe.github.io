
# 常见面试题五

`#前端面试` 


## 目录
<!-- toc -->
 ## 1. 浏览器本地如何`读取并处理`本地特别大的文件 

我来总结几种在浏览器本地读取并处理大文件的主要方法，按照效率从高到低排序：

### 1.1. 使用 WebAssembly 来处理大文件

下面是一个使用 Rust + WebAssembly 实现的例子：

#### 1.1.1. 首先创建 Rust 项目

```bash
cargo new --lib wasm-file-processor
cd wasm-file-processor
```

#### 1.1.2. 修改 `Cargo.toml`

````toml
[package]
name = "wasm-file-processor"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
js-sys = "0.3"
web-sys = { version = "0.3", features = ["console"] }
````

#### 1.1.3. Rust 代码实现（`src/lib.rs`）

````rust
use wasm_bindgen::prelude::*;

`#[wasm_bindgen]`
pub struct FileProcessor {
    buffer: Vec<u8>,
    position: usize,
}

`#[wasm_bindgen]`
impl FileProcessor {
    `#[wasm_bindgen(constructor)]`
    pub fn new() -> FileProcessor {
        FileProcessor {
            buffer: Vec::new(),
            position: 0,
        }
    }

    pub fn process_chunk(&mut self, chunk: &[u8]) {
        self.buffer.extend_from_slice(chunk);
    }

    pub fn get_processed_data(&self) -> Vec<u8> {
        self.buffer.clone()
    }

    // 示例：计算文件中特定字节的出现次数
    pub fn count_byte(&self, target: u8) -> u32 {
        self.buffer.iter().filter(|&&b| b == target).count() as u32
    }
}
````

#### 1.1.4. JavaScript 代码实现

````javascript
// 导入 WebAssembly 模块
import init, { FileProcessor } from './pkg/wasm_file_processor.js';

async function processLargeFile(file) {
    // 初始化 WebAssembly
    await init();
    
    const chunkSize = 1024 * 1024; // 1MB chunks
    const fileProcessor = new FileProcessor();
    let offset = 0;

    while (offset < file.size) {
        const chunk = await readChunk(file, offset, chunkSize);
        
        // 将 chunk 传递给 WebAssembly 处理
        fileProcessor.process_chunk(new Uint8Array(chunk));
        
        offset += chunkSize;
        // 更新进度
        const progress = Math.round((offset / file.size) * 100);
        console.log(`Processing: ${progress}%`);
    }

    return fileProcessor;
}

function readChunk(file, offset, size) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        
        const slice = file.slice(offset, offset + size);
        reader.readAsArrayBuffer(slice);
    });
}

// 使用示例
document.querySelector('input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    try {
        const processor = await processLargeFile(file);
        
        // 示例：计算文件中字母 'a' 的出现次数
        const count = processor.count_byte(97); // 97 是字母 'a' 的 ASCII 码
        console.log(`Letter 'a' appears ${count} times`);
        
    } catch (error) {
        console.error('Error processing file:', error);
    }
});
````

#### 1.1.5. 更复杂的处理示例（在 Rust 中添加更多功能）

省略

#### 1.1.6. 在 JavaScript 中使用增强的功能

#### 1.1.7. 总结

使用 WebAssembly 的优势：

1. **性能更好**：Rust 代码编译成 WebAssembly 后，**执行速度接近原生代码**
2. **内存安全**：Rust 的内存安全机制可以避免很多常见的内存问题
3. **并行处理**：可以配合 Web Workers 实现真正的并行处理
4. **类型安全**：Rust 的强类型系统可以在编译时捕获很多错误

注意事项：

1. 需要配置适当的构建工具链（wasm-pack）
2. 考虑浏览器对 WebAssembly 的支持情况
3. 大文件处理时仍需要考虑内存管理
4. 在开发时注意 Rust 和 JavaScript 之间的数据转换开销

这个实现可以根据具体需求进行扩展，比如添加更多的文件处理功能、压缩解压缩、图像处理等。

### 1.2. 使用 File System Access API

````javascript hl:4
async function processLargeFile() {
    try {
        // 打开文件
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        
        // 创建文件流
        const stream = await file.stream();
        const reader = stream.getReader();
        
        // 处理数据
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            // value 是 Uint8Array 类型
            processChunk(value);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

// 使用示例
button.onclick = processLargeFile;
````

### 1.3. 使用 Streams API

````javascript hl:6
async function processLargeFile(file) {
    const stream = file.stream();
    const reader = stream.getReader();

    // 创建转换流来处理数据
    const transform = new TransformStream({
        transform(chunk, controller) {
            // 在这里处理数据块
            const processed = processChunk(chunk);
            controller.enqueue(processed);
        }
    });

    // 读取并处理
    try {
        await reader
            .pipeThrough(transform)
            .pipeTo(new WritableStream({
                write(chunk) {
                    // 处理转换后的数据
                    console.log('Processed chunk:', chunk);
                }
            }));
    } catch (err) {
        console.error('Error:', err);
    }
}

// 使用示例
input.onchange = e => processLargeFile(e.target.files[0]);
````

### 1.4. 使用 Blob 切片 + Web Worker（适合需要大量计算的场景）

````javascript
// main.js
function processLargeFile(file) {
    const CHUNK_SIZE = 2 * 1024 * 1024; // 2MB chunks
    let offset = 0;
    
    // 创建 Worker
    const worker = new Worker('worker.js');
    
    function readNextChunk() {
        const slice = file.slice(offset, offset + CHUNK_SIZE);
        const reader = new FileReader();
        
        reader.onload = function(e) {
            worker.postMessage({
                chunk: e.target.result,
                offset: offset,
                done: offset >= file.size
            });
            
            offset += CHUNK_SIZE;
            if (offset < file.size) {
                readNextChunk();
            }
        };
        
        reader.readAsArrayBuffer(slice);
    }
    
    // 处理 Worker 返回的结果
    worker.onmessage = function(e) {
        console.log('Processed result:', e.data);
    };
    
    readNextChunk();
}

// worker.js
self.onmessage = function(e) {
    const { chunk, offset, done } = e.data;
    
    // 在 Worker 中处理数据
    const result = processChunk(chunk);
    
    self.postMessage({
        result,
        offset,
        done
    });
};
````

### 1.5. 使用 IndexedDB 存储和处理（适合需要持久化的场景）

````javascript
async function processWithIndexedDB(file) {
    const db = await openDB('FileDB', 1, {
        upgrade(db) {
            db.createObjectStore('chunks');
        }
    });

    // 分块存储
    const CHUNK_SIZE = 2 * 1024 * 1024;
    let offset = 0;
    
    while (offset < file.size) {
        const chunk = file.slice(offset, offset + CHUNK_SIZE);
        const buffer = await chunk.arrayBuffer();
        
        // 存储到 IndexedDB
        await db.put('chunks', buffer, offset);
        
        // 处理数据
        await processChunk(buffer);
        
        offset += CHUNK_SIZE;
    }
}

// 处理单个数据块
async function processChunk(buffer) {
    // 示例：计算数据块的哈希
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    return new Uint8Array(hashBuffer);
}
````

### 1.6. 实际使用建议

#### 1.6.1. 选择策略

- 如果需要实时处理：使用 Streams API
- 如果需要大量计算：使用 Web Worker
- 如果需要持久化：使用 IndexedDB
- 如果需要最新特性：使用 File System Access API
#### 1.6.2. 性能优化

```javascript
// 添加进度显示
const total = file.size;
let processed = 0;

function updateProgress(chunkSize) {
    processed += chunkSize;
    const progress = (processed / total) * 100;
    console.log(`Progress: ${progress.toFixed(2)}%`);
}

// 添加内存管理
function cleanupMemory() {
    // 手动触发垃圾回收
    if (global.gc) {
        global.gc();
    }
}

// 添加错误处理
try {
    // 处理代码
} catch (err) {
    console.error('Error processing file:', err);
    // 清理资源
    reader.cancel();
    worker.terminate();
}
```

#### 1.6.3. 最佳实践

- 始终显示进度信息
- 提供取消操作的能力
- 做好错误处理
- 注意内存管理
- 考虑使用 Web Worker 避免阻塞主线程

#### 1.6.4. 选择建议

选择合适的方法取决于你的具体需求：

- 文件大小
- 处理复杂度
- 浏览器兼容性要求
- 是否需要持久化
- 是否需要实时处理
## 2. worker 中无法读取本地文件，限制如下

![图片&文件](./files/20241028-19.png)

## 3. 介绍一下 WebAssembly (Wasm) 及其应用场景

### 3.1. WebAssembly 基本概念

WebAssembly 是一种低级的二进制格式，可以在现代浏览器中运行，提供接近原生的性能。主要特点：

- 快速执行
- 跨平台
- 支持多种编程语言（C++、Rust、Go等）
- 与JavaScript互操作
- 安全的沙箱环境

### 3.2. 基本使用示例（使用Rust）：fib

````rust
// Rust代码 (lib.rs)
use wasm_bindgen::prelude::*;

`#[wasm_bindgen]`
pub fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    fibonacci(n - 1) + fibonacci(n - 2)
}
````

对应的JavaScript调用：

````javascript
import init, { fibonacci } from './pkg/my_wasm.js';

async function run() {
    await init();
    console.log(fibonacci(10)); // 输出第10个斐波那契数
}

run();
````

### 3.3. 常见使用案例

#### 3.3.1. 图像处理

````rust
// Rust代码
`#[wasm_bindgen]`
pub fn apply_grayscale(data: &mut [u8]) {
    for pixel in data.chunks_mut(4) {
        let avg = (pixel[0] as u32 + pixel[1] as u32 + pixel[2] as u32) / 3;
        pixel[0] = avg as u8;
        pixel[1] = avg as u8;
        pixel[2] = avg as u8;
    }
}
````

JavaScript调用：

````javascript
async function processImage(imageData) {
    const { memory, apply_grayscale } = await init();
    
    // 创建共享内存
    const array = new Uint8ClampedArray(memory.buffer, imageData.data.byteOffset, imageData.data.length);
    
    // 处理图像
    apply_grayscale(array);
    
    // 更新canvas
    ctx.putImageData(imageData, 0, 0);
}
````

#### 3.3.2. 游戏引擎

````rust
// Rust游戏逻辑
`#[wasm_bindgen]`
pub struct GameState {
    players: Vec<Player>,
    world: World,
}

`#[wasm_bindgen]`
impl GameState {
    pub fn new() -> GameState {
        // 初始化游戏状态
    }

    pub fn update(&mut self) {
        // 更新游戏逻辑
    }

    pub fn render(&self) -> Vec<u8> {
        // 返回渲染数据
    }
}
````

JavaScript集成：

````javascript
import { GameState } from './pkg/game_wasm.js';

class Game {
    constructor() {
        this.gameState = GameState.new();
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    gameLoop() {
        this.gameState.update();
        const renderData = this.gameState.render();
        this.draw(renderData);
        requestAnimationFrame(() => this.gameLoop());
    }
}
````

#### 3.3.3. 音频处理

````rust
`#[wasm_bindgen]`
pub struct AudioProcessor {
    buffer: Vec<f32>,
}

`#[wasm_bindgen]`
impl AudioProcessor {
    pub fn new() -> AudioProcessor {
        AudioProcessor {
            buffer: Vec::new(),
        }
    }

    pub fn process_audio(&mut self, samples: &[f32]) -> Vec<f32> {
        // 音频处理逻辑
        samples.iter().map(|&x| x * 0.5).collect()
    }
}
````

JavaScript音频处理：

````javascript hl:3
class AudioHandler {
    async init() {
        const { AudioProcessor } = await import('./pkg/audio_wasm.js');
        this.processor = AudioProcessor.new();
        
        const audioContext = new AudioContext();
        const source = audioContext.createBufferSource();
        const processor = audioContext.createScriptProcessor(2048, 1, 1);
        
        processor.onaudioprocess = (e) => {
            const input = e.inputBuffer.getChannelData(0);
            const output = e.outputBuffer.getChannelData(0);
            
            // 使用WASM处理音频
            const processed = this.processor.process_audio(input);
            output.set(processed);
        };
    }
}
````

#### 3.3.4. 密码学应用

````rust
`#[wasm_bindgen]`
pub fn hash_password(password: &str, salt: &str) -> String {
    use argon2::{self, Config};
    
    let config = Config::default();
    argon2::hash_encoded(
        password.as_bytes(),
        salt.as_bytes(),
        &config
    ).unwrap()
}
````

JavaScript使用：

````javascript
async function hashPassword(password) {
    const { hash_password } = await init();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    return hash_password(password, salt);
}
````

#### 3.3.5. 3D渲染

````rust
`#[wasm_bindgen]`
pub struct Renderer {
    vertices: Vec<f32>,
    indices: Vec<u32>,
}

`#[wasm_bindgen]`
impl Renderer {
    pub fn new() -> Renderer {
        Renderer {
            vertices: Vec::new(),
            indices: Vec::new(),
        }
    }

    pub fn render_scene(&self) -> Vec<u8> {
        // 3D渲染逻辑
    }
}
````

与WebGL集成：

````javascript
class Scene {
    async init() {
        const { Renderer } = await import('./pkg/renderer_wasm.js');
        this.renderer = Renderer.new();
        
        const gl = canvas.getContext('webgl');
        // 设置WebGL上下文
        
        this.animate();
    }
    
    animate() {
        const renderData = this.renderer.render_scene();
        // 更新WebGL缓冲区
        requestAnimationFrame(() => this.animate());
    }
}
````

### 3.4. 性能优化建议

````javascript hl:1,5,9,17
// 1. 避免频繁的内存复制
const memory = new WebAssembly.Memory({ initial: 10 });
const sharedArray = new Uint8Array(memory.buffer);

// 2. 使用Web Workers
const worker = new Worker('wasm-worker.js');
worker.postMessage({ type: 'init' });

// 3. 批量处理数据
function batchProcess(data, batchSize = 1000) {
    for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        wasmModule.processBatch(batch);
    }
}

// 4. 使用共享内存
const shared = new SharedArrayBuffer(1024);
const sharedInt32 = new Int32Array(shared);
````

### 3.5. 最佳实践

- 将计算密集型任务交给WebAssembly
- 保持JavaScript接口简单清晰
- 适当使用 Web Workers
- 注意内存管理
- 优化数据传输
- 使用适当的工具链（wasm-pack、emscripten等）
- 进行性能测试和对比

### 3.6. 实际案例

- a. AutoCAD Web：
	- 将复杂的 CAD 软件移植到网页
	- 实现接近桌面级的性能
	- 支持大型工程图纸处理
- b. Google Earth：
	- 3D 地图渲染
	- 复杂地理数据处理
	- 流畅的用户交互
- c. Figma：
	- 实时图形处理
	- 复杂的布局计算
	- 快速的界面响应
- Unity WebGL：游戏引擎通过 WebAssembly 部署到网页
- Autodesk AutoCAD Web：使用 C++ 编译到 WebAssembly
- Photoshop Web 版本使用 WebAssembly
### 3.7. WebAssembly 特别适合

- 游戏开发
- 图像/视频处理
- 3D渲染
- 科学计算
- 加密算法
- 音频处理
- 模拟器
- 大数据处理
- 需要高性能的 Web 应用
- 现有原生应用的 Web 迁移

通过合理使用WebAssembly，可以显著提升Web应用的性能，特别是在计算密集型任务中。

