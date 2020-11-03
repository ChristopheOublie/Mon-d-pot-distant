
-- 1 - Liste des contacts français :


 /* SELECT customers.CompanyName AS 'societé', customers.ContactName AS 'contact',customers.ContactTitle  AS 'fonction' , customers.Phone AS 'telephone'
       
From customers
WHERE country = 'france'
*/


-- 2 - Produits vendus par le fournisseur « Exotic Liquids » :

 /* SELECT products.ProductName  AS 'produit',  products.UnitPrice AS 'prix' 
FROM products
JOIN Suppliers ON PRODUCTS.SupplierID=suppliers.SupplierID
WHERE companyName = 'exotic liquids'
*/

-- 	3 - Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant :



 /* SELECT suppliers.CompanyName AS'xxx',
COUNT(products.ProductID) AS 'nbre produits' FROM suppliers
JOIN products ON products.SupplierID=suppliers.SupplierID 
WHERE COUNTRY = 'france'
GROUP BY products.SupplierID
ORDER BY 'nbre produits' DESC;
*/

-- 4 - Liste des clients Français ayant plus de 10 commandes :


 /* SELECT customers.CompanyName AS 'client' ,
COUNT(orders.OrderID) AS 'nbr commande' FROM customers
JOIN orders ON orders.CustomerID=customers.CustomerID 
WHERE COUNTRY = 'france'
GROUP BY customers.CompanyName
HAVING COUNT( 'nbr commande') > 10 
*/


-- 5 - Liste des clients ayant un chiffre d’affaires > 30.000 :

 /*SELECT customers.CompanyName  AS 'client',
SUM(`order details`.	UnitPrice * `order details`.Quantity) AS 'CA',   -- calcul ce chiffre d'affaire = prix de vente*quantités vendues
customers.Country AS 'pays' FROM customers
JOIN orders ON orders.CustomerID= customers.CustomerID
JOIN `order details`ON `order details`.OrderID=orders.OrderID 
GROUP BY customers.CustomerID 
HAVING CA > 30000    -- attention à la syntaxe sur la nomination du CA ne pas mettre de guillement car il est devenu un élément à part entière
ORDER BY CA DESC;
*/

-- 6 – Liste des pays dont les clients ont passé commande de produits fournis par « Exotic Liquids » :


 /*SELECT customers.Country AS 'pays' FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN `order details` ON `order details`.OrderID = orders.OrderID
JOIN products ON products.ProductID = `order details`. ProductID
JOIN suppliers ON suppliers.SupplierID = products.SupplierID

-- lier toutes les clés entre elles 

WHERE suppliers.CompanyName = "Exotic Liquids"
ORDER BY customers.Country

-- problème de doublon trouver une fonction qui permet de l'éviter

*/

-- 7 – Montant des ventes de 1997 :

 /* SELECT SUM(`order details`.UnitPrice * `order details`.Quantity) AS 'Montant Ventes 97'
 FROM `order details`
 JOIN orders ON orders.OrderID = `order details`.OrderID
 WHERE orders.OrderDate LIKE '%1997%'
 
 -- je trouve le résultat mais j'ai une erreur à verifier avec le formateur
 
 */
 
 -- 8 – Montant des ventes de 1997 mois par mois :
 
  
  
   /* SELECT MONTH(orders.OrderDate) AS 'mois 97',SUM(`order details`.UnitPrice * `order details`.Quantity) AS 'Montant Ventes 97'
 FROM orders
 JOIN `order details` ON `order details`.OrderID=orders.OrderID 
 WHERE YEAR(orders.OrderDate)=1997
 GROUP BY MONTH(orders.OrderDate)
 
 
 
 /*
 
 
 -- 9 – Depuis quelle date le client « Du monde entier » n’a plus commandé ?
 
 /*
 SELECT MAX(orders.OrderDate) AS 'Date de dernière commande'
 FROM orders
 JOIN customers ON customers.CustomerID=orders.CustomerID
 WHERE customers.CompanyName ='du monde entier'
 
 */
 
 -- 10 – Quel est le délai moyen de livraison en jours ?
 
 
 -- On va utiliser la fonction avg
 
  
  /* SELECT ROUND(AVG(DATEDIFF(orders.ShippedDate,orders.OrderDate))) AS 'DéLAI DE LIVRAISON '
FROM ORDERS


 */
  -- les codes fonctionnent à voir avec le formateur
 
 
 
 
 
 


 

















