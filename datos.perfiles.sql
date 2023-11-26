CREATE TABLE usuario (
    usuario_id INT(5) NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    contrasena VARCHAR(40) NOT NULL,
    fotoPerfil VARCHAR(40) NOT NULL,
    PRIMARY KEY (usuario_id)
);

CREATE TABLE seguidores (
    usuario_id INT(5) NOT NULL,
    id_seguidores INT(5) NOT NULL,
    PRIMARY KEY (usuario_id, id_seguidores),
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

CREATE TABLE personas_seguidas (
    usuario_id INT(5) NOT NULL,
    id_seguido INT(5) NOT NULL,
    PRIMARY KEY (usuario_id, id_seguido),
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

CREATE TABLE galeria (
    usuario_id INT(5) NOT NULL,
    img VARCHAR(40) NOT NULL,
    PRIMARY KEY (usuario_id, img),
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

INSERT INTO usuario (usuario_id, nombre_usuario, contrasena, fotoPerfil) VALUES
(1, 'tlacuachito', 'wAAAHHH', 'tlacuachep'),
(2, 'chabelo_oficial', 'tacosDECACA', 'chabello'),
(3, 'karloPaz', 'supermanburro', 'omori'),
(4, 'juanito_mecanico', 'brumbrumCarro', 'mecanico'),
(5, 'informaticauaq', 'troyanosazulesss', 'fif'),
(6, 'arcadefire','kettles', 'arcfir'),
(7, 'doritos', 'doritosincognitaPRO', 'doritos'),
(8, 'ternurines', 'babalala', 'ternurines'),
(9, 'alex_vargas', 'señorsecretarioacademico', 'hacker'),
(10, 'Stitch', 'experimento626', 'stitch');

INSERT INTO seguidores (usuario_id, id_seguidores) VALUES 
(1, 1),
(1, 3),
(1, 5),
(3, 10),
(4, 10);

INSERT INTO personas_seguidas (usuario_id, id_seguido) VALUES
(5, 1),
(5, 3),
(10, 4);
