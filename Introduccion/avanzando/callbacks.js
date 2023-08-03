const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    setTimeout(() =>{
        let posts = ["post1","post2","post3"];
        callback(posts);
    }, 2000);
}

obtenerPostDeUsuario("jesus", (post) => {
    console.log(post);
})
