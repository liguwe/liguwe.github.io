<script setup>
import pages from '../yuque.json';
pages.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());
</script>
