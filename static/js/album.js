function actualizarAlbum(albumName) {    
    // Enviar el álbum al servidor
    fetch('/update-album', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ album: albumName }) // Enviar el álbum al servidor
    }).catch(error => {
        console.error('Error al enviar el álbum:', error);
    });
}
