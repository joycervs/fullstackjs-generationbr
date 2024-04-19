create database db_rh;
use db_rh;

create table tb_colaboradores(
	id bigint auto_increment primary key,
    nome varchar(255) not null,
    cargo varchar(255) not null,
    salario decimal(6,2) not null,
    datanasc date not null
);

select * from tb_colaboradores;

insert into tb_colaboradores(nome, cargo, salario, datanasc)
values("Joyce","CEO", 5000, "1998-04-23"),
("Caio","Estagiário", 1000, "1998-04-23"),
("Jorge","Dev. jr", 3000, "1998-04-23"),
("Lucas","Estagiário", 1000, "1998-04-23"),
("Maria Eduarda","CEO", 5000, "1998-04-23");

select * from tb_colaboradores where salario > 2000;
select * from tb_colaboradores where salario < 2000;

update tb_colaboradores set salario = 2000 where id = 2;