<?php
    class Usuario{
        private $fotoPerfil = '';
        private $usuario = '';
        private $contrasena = '';
        private $amigos = array('');
        private $fotos = array('');
        
        function __construct(string $perfil, string $usuar, string $cont){
            $this->fotoPerfil = $perfil;
            $this->usuario = $usuar;
            $this->contrasena = $cont;
            $this->amigos = '';
            $this->fotos = '';
        }

        function seguidores()
    }

    
?>