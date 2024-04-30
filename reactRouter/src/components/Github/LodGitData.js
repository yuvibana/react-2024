export const githubLoadData = async () => {
    const response = await fetch('https://api.github.com/users/yuvibana')
    return response.json();
}