--evaluation sql1--


DROP DATABASE IF EXISTS banane ;
CREATE DATABASE banane;
USE banane;
CREATE TABLE produit (
	pro_num		INT,
	pro_lib		VARCHAR(50),
	pro_desc	VARCHAR(50),
	PRIMARY KEY (pro_num));
CREATE TABLE client (
	cli_num		INT AUTO_INCREMENT, 
	cli_nom		VARCHAR(50),
	cli_adres	VARCHAR(50), 
	cli_tel		VARCHAR(30),
	PRIMARY KEY (cli_num));
CREATE TABLE commande (
	com_num			INT AUTO_INCREMENT, 
	com_cli_num		INT,
	com_date		DATETIME,
	com_obs			VARCHAR(50),
	PRIMARY KEY (com_num),
	FOREIGN KEY (com_cli_num) REFERENCES client(cli_num)
	);

CREATE TABLE est_compose (
	vnt_com_num		INT, 
	vnt_pro_num		INT, 
	vnt_est_qte		INT, 
	PRIMARY KEY (vnt_com_num, vnt_pro_num),
      
	FOREIGN KEY (vnt_com_num) REFERENCES commande(com_num),
	FOREIGN KEY (vnt_pro_num) REFERENCES produit(pro_num)
     	);
