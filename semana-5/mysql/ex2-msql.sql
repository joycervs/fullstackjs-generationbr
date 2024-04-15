create database db_ecommerce;
use db_ecommerce;

create table tb_produtos(
	id bigint auto_increment primary key,
    nome varchar(255) not null,
    descricao varchar(1000) not null,
    preco decimal(6,2) not null,
    tipo varchar(255) not null
);

select * from tb_produtos;

insert into tb_produtos(nome, descricao, preco, tipo)
values("Teclado mecânico RGB", "Teclado", 300, "Periférico"),
    ("Fone de ouvido sem fio", "Fone de ouvido", 400, "Acessório"),
    ("Monitor 4K IPS", "Monitor", 1500, "Componente"),
    ("SSD NVMe 1TB", "Disco de armazenamento", 800, "Componente"),
    ("Câmera de segurança HD", "Câmera", 200, "Segurança");

select * from tb_produtos where preco > 500;
select * from tb_produtos where preco < 500;

update tb_produtos set preco = 500 where id = 1;

