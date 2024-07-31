// Fetching the posts for index and blog view

async function fetchPosts() {
    try {
        const response = await fetch('posts.json');
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
