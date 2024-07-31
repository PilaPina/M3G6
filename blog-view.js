// blog-view.js
document.addEventListener('DOMContentLoaded', async () => {
    const posts = await fetchPosts();
    const container = document.getElementById('postsContainer');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'mb-6');
        postElement.id = `post-${post.id}`;
        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="Travel Image" class="w-full h-64 object-cover object-center">
            <div class="p-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">${post.title}</h2>
                <p class="text-gray-600">Published on <span class="font-semibold">${post.date}</span></p>
                <p class="mt-4 text-gray-700">${post.content}</p>
            </div>
        `;
        container.appendChild(postElement);
    });

});
