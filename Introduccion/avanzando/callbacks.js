//<<<<<<< HEAD
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
//=======
//? Que son los callbacks: Son funciones que podemos pasar como parametro a otra funcion  


obtenerPostOfUser("jesus",(Parametro_Que_nos_Va_Devolver) => {
    
});
//? 
//>>>>>>> b060f7eb8970dc08f2578cd4f3a70ffe83d7a777
