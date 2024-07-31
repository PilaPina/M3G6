// script for fetching the index view. 
document.addEventListener('DOMContentLoaded', async () => {
    const posts = await fetchPosts();
    const container = document.getElementById('postsContainer');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden');
        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="Travel Image" class="w-full h-48 object-cover object-center" style="height: 200px;">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-800 mb-2">${post.title}</h2>
                <p class="text-gray-600">${post.content.substring(0, 100)}...</p>
                <a href="blog.html?id=${post.id}" class="text-blue-600 hover:underline">Read more</a>
            </div>
        `;
        container.appendChild(postElement);
    });
});
