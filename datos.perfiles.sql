CREATE TABLE IF NOT EXISTS 'usuario'(
    'usuario_id' NUMBER(5) NOT NULL,
    'nombre_usuario' VARCHAR2(20) NOT NULL,
    'contrasena' VARCHAR2(40) NOT NULL,
    'fotoPerfil' VARCHAR2(40) NOT NULL
)

CREATE TABLE IF NOT EXISTS 'seguidores'(
    'usuario_id' NUMBER(5) NOT NULL,
    'id_seguidores' NUMBER(5) NOT NULL,
)

CREATE TABLE IF NOT EXISTS 'personas_seguidas'(
    'usuario_id' NUMBER(5) NOT NULL,
    'id_seguido' NUMBER(5) NOT NULL
)

CREATE TABLE IF NOT EXISTS 'galeria'(
    'usuario_id' NUMBER(5) NOT NULL,
    'img' VARCHAR2(40) NOT NULL
)

INSERT INTO 'usuario' ('usuario_id', 'nombre_usuario', 'contrasena', 'fotoPerfil') VALUES
('1','tlacuachito', 'wAAAHHH', ''),
('2','chabelo_oficial', 'tacosDECACA', ''),
('3','karloPaz', 'supermanburro', ''),
('4','juanito_mecanico', 'brumbrumCarro', ''),
('5','informaticauaq', 'troyanosazulesss', ''),
('6','arcadefire','kettles', ''),
('7','doritos', 'doritosincognitaPRO', ''),
('8','ternurines', 'babalala', ''),
('9','alex_vargas', 'señorsecretarioacademico', ''),
('10','Stitch', 'experimento626', '');

INSERT INTO 'seguidores' ('usuario_id','id_seguido') VALUES 
('1','1'),
('1','3'),
('1','5'),
('3','10'),
('4','10');

INSERT INTO 'personas_seguidas' ('usuario_id','id_seguido') VALUES
('5','1'),
('5','3'),
('10','4');