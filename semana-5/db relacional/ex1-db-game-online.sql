create database db_generation_game_online;
use db_generation_game_online;

create table  tb_classes(
	id bigint auto_increment primary key,
	tipo varchar(50) not null,
	atributo varchar(50) not null
);

create table  tb_personagens(
	id bigint auto_increment primary key,
	nome varchar(255) not null,
    descricao varchar(500) not null,
	ataque int not null,
    defesa int not null
);

alter table tb_personagens add column classe_id bigint;
alter table tb_personagens add constraint fk_classes_personagens
foreign key (classe_id) references tb_classes(id);

INSERT INTO tb_personagens(nome, descricao, ataque, defesa)
VALUES
    ('Guerreiro', 'Um lutador corpo a corpo resistente e forte.', 3000, 2000),
    ('Mago', 'Um usuário de magia poderoso, mas frágil fisicamente.', 2500, 1500),
    ('Arqueiro', 'Um especialista em ataques à distância, rápido e preciso.', 2500, 1500),
    ('Ladino', 'Um mestre do sigilo e do combate furtivo.', 2000, 1000),
    ('Clérigo', 'Um curandeiro que pode invocar poderes divinos.', 2000, 2000);
    
INSERT INTO tb_classes(tipo, atributo)
VALUES
    ('Guerreiro', 'Força'),
    ('Mago', 'Inteligência'),
    ('Arqueiro', 'Destreza'),
    ('Ladino', 'Agilidade'),
    ('Clérigo', 'Sabedoria');
    
    select * from tb_personagens where ataque > 2000;
    select * from tb_personagens where defesa between 1000 and 2000;
	select * from tb_personagens where nome like "%c%";
	select * from tb_personagens inner join tb_classes on tb_personagens.id = tb_classes.id;
    select * from tb_personagens  inner join tb_classes on tb_personagens.id = tb_classes.id where tb_classes.tipo = "Arqueiro";

