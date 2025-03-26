const list = [
    { id: "1", pid: "-1" },
    { id: "2", pid: "1" },
    { id: "7", pid: "4" },
    { id: "4", pid: "2" },
    { id: "3", pid: "1" },
    { id: "5", pid: "2" },
    { id: "6", pid: "3" },
];
const tree = {
    id: "1",
    children: [
        {
            id: "2",
            children: [
                {
                    id: "4",
                    children: [
                        {
                            id: "7",
                            children: [],
                        },
                    ],
                },
                {
                    id: "5",
                    children: [],
                },
            ],
        },
        {
            id: "3",
            children: [
                {
                    id: "6",
                    children: [],
                },
            ],
        },
    ],
};

function genTree(list) {
    let res = {};
    let mapping = {};
    for (let item of list) {
        mapping[item.id] = {
            ...item,
            children: [],
        };
    }
    for (let item of list) {
        if (item.pid === "-1") {
            res = {
                ...item,
                children: [],
            };
        } else {
            let p = mapping[item.pid];
            p.children.push({
                ...item,
                children: [],
            });
        }
    }
    return res;
}

console.log(genTree(list));
