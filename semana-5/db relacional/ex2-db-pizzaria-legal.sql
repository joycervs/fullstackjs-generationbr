create database db_pizzaria_legal;

use db_pizzaria_legal;

create table tb_categorias(
	categoria_id int primary key auto_increment,
    nome varchar(50),
    descricao varchar(255)
);

create table tb_pizzas(
	id int primary key auto_increment,
	nome varchar(100),
    descricao varchar(255),
    preco decimal(6,2),
    disponivel boolean,
    categoria_id int,
    foreign key (categoria_id) references tb_categorias(categoria_id)
);

insert into tb_categorias (nome, descricao) values
('Salgadas', 'Pizzas com ingredientes salgados'),
('Doces', 'Pizzas com ingredientes doces'),
('Vegetarianas', 'Pizzas sem carne'),
('Especiais', 'Pizzas com ingredientes especiais'),
('Clássicas', 'Pizzas tradicionais');

insert into tb_pizzas (nome, descricao, preco, disponivel, categoria_id) values
('Margherita', 'Molho de tomate, muçarela e manjericão fresco', 40.00, true, 5),
('Calabresa', 'Molho de tomate, muçarela, calabresa fatiada e cebola', 35.00, true, 1),
('Quatro Queijos', 'Molho de tomate, muçarela, provolone, parmesão e gorgonzola', 45.00, true, 1),
('Chocolate com Morango', 'Chocolate ao leite, morangos frescos e granulado', 50.00, true, 2),
('Vegetariana', 'Molho de tomate, muçarela, tomate, pimentão, cebola e azeitonas', 40.00, true, 3),
('Frango com Catupiry', 'Molho de tomate, muçarela, frango desfiado e catupiry', 55.00, true, 1),
('Portuguesa', 'Molho de tomate, muçarela, presunto, ovos cozidos, cebola e azeitonas', 45.00, true, 5),
('Romeu e Julieta', 'Goiabada e queijo minas frescal', 40.00, true, 2);

select * from tb_pizzas where preco > 45.00;
select * from tb_pizzas where preco between 50.00 and 100.00;
select * from tb_pizzas where nome like "M%";

SELECT tb_pizzas.*, tb_categorias.*
FROM tb_pizzas
INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.categoria_id;


select tb_pizzas.*, tb_categorias.*
from tb_pizzas
inner join tb_categorias on tb_pizzas.categoria_id = tb_categorias.categoria_id;

select tb_pizzas.*, tb_categorias.*
from tb_pizzas
inner join tb_categorias on tb_pizzas.categoria_id = tb_categorias.categoria_id
where tb_categorias.nome = "Doces";