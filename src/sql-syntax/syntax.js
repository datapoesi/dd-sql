
export const sqlSyntax = [
    {
        keyword: "Comments",
        optionalComment: null,
        statement: `-- A single-line comment\n/* A multi-line comment */`,
    },
    {
        keyword: "SELECT",
        optionalComment: null,
        statement: `SELECT * FROM tableName;\nSELECT column01, column02 FROM tableName;`,
    },
    {
        keyword: "WHERE",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE CustomerId == 14;`,
    },
    {
        keyword: "AND, OR",
        optionalComment: null,
        statement: `SELECT * FROM tableName\nWHERE CustomerId == 4\nAND CustomerId <= 10\nOR CustomerId != 5;`,
    },
    {
        keyword: "Operators",
        optionalComment: "-- Comparison operators",
        statement: `SELECT * FROM Customers\nWHERE CustomerId <= 14;\n= ==\n<> != /* These two do the same */\n< <= > >=\n+ - * / % -- Arithmetic operators`,
    },
    {
        keyword: "BETWEEN",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE CustomerId BETWEEN 1 AND 10\nWHERE CustomerId NOT BETWEEN 1 AND 10`,
    },
    {
        keyword: "IN",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE CustomerId IN (2, 4, 6)\nWHERE CustomerId NOT IN (1, 3, 5)`,
    },
    {
        keyword: "LIKE",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE CustomerName LIKE "ABC"\nWHERE CustomerName NOT LIKE "ABCD"`,
    },
    {
        keyword: "Wildcards",
        optionalComment: "-- There are two wildcards often used in conjunction with the LIKE operator.\n-- The percent sign (%) represents zero, one, or multiple characters.\n-- The underscore sign (_) represents one, single character.",
        statement: `SELECT * FROM Customers\nWHERE CustomerName LIKE "%AT%"\nWHERE CustomerName LIKE "C%EA"\nWHERE CustomerName LIKE "AN_"\nWHERE CustomerName LIKE "%g__a%"`,
    },
    {
        keyword: "AS",
        optionalComment: "-- used to rename a column or table with an alias.",
        statement: `SELECT\nFirstName + LastName AS Name,\n(age BETWEEN 13 AND 19) AS isTeenager,\n'Michael Scott' AS manager\nFROM badTableName AS betterTableName\n`,
    },
    {
        keyword: "DISTINCT",
        optionalComment: "/* DISTINCT discards rows that have a duplicate column value. */",
        statement: `SELECT DISTINCT columnName\nFROM tableName`,
    },
    {
        keyword: "NULL",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE CustomerName IS NULL\nWHERE CustomerName IS NOT NULL\nCOALESCE() -- input is a list of values, output is the first value in the list that isn't null `,
    },
    {
        keyword: "ORDER BY",
        optionalComment: "/* Sorts the query results by a given column in ascending or descending order. */",
        statement: `SELECT * FROM tableName\nORDER BY column01, column02 ASC, column03 DESC; `,
    },
    {
        keyword: "LIMIT",
        optionalComment: "/* Using LIMIT without first using ORDER BY may not always give you the results you intend. */",
        statement: `SELECT * FROM tableName\nLIMIT 3\nLIMIT 3,7\nLIMIT 3 OFFSET 7`,
    },
    {
        keyword: "Aggregate functions",
        optionalComment: "-- The input to a function is a column of data.\n-- The output is a single value.",
        statement: `COUNT(* or x)\nMIN(x), MAX(x), AVG(x)\nABS(x), SUM(x), LENGTH(x)\n-- See the docs of your DBMS for additional aggregate functions.`,
    },
    {
        keyword: "GROUP BY",
        optionalComment: null,
        statement: `SELECT exercise_type, SUM(calories) AS total_calories\nFROM exercise_logs\nGROUP BY exercise_type`,
    },
    {
        keyword: "HAVING",
        optionalComment: null,
        statement: `SELECT exercise_type, SUM(calories) AS total_calories\nFROM exercise_logs\nGROUP BY exercise_type\nHAVING total_calories > 150`,
    },
    {
        keyword: "JOIN",
        optionalComment: "/* a JOIN combines rows from two (or more!) tables into a single table based on a related column between them. */",
        statement: `SELECT * FROM table1\nINNER JOIN table2 --INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN\nON table1.colName = table2.colName /* The ON clause evaluates to true or false. When a row from the first table and a row from the second table line up with the clause being true, the two rows are matched. */\n-- To do: join three or more tables.`,
    },
    {
        keyword: "Order of execution",
        optionalComment: "-- Each part of the query is executed sequentially, and the query has a specific order of execution.",
        statement: `SELECT DISTINCT columnName -- 6\nFROM table01 -- 1\nJOIN table02 ON table01.column = table02.column -- 2\nWHERE <expression> -- 3\nGROUP BY columnName -- 4\nHAVING <expression> -- 5\nORDER BY columnName ASC/DESC -- 7\nLIMIT count OFFSET COUNT -- 8;`,
    },
    {
        keyword: "Keyword? Clause? Statement? Query?",
        optionalComment: null,
        statement: `-- A keyword is a reserved word in SQL, like SELECT or WHERE\n-- A clause is a part of a SQL statement, like WHERE n = 4\n-- A statement is the whole command, like SELECT * FROM tableName\n-- A query is a statement that returns a recordset`,
    },
    {
        keyword: "UNION, INTERSECT, EXCEPT",
        optionalComment: "-- UNION combines the results of two SQL queries into a single table.",
        statement: `SELECT name AS people FROM students\nUNION\nSELECT name AS people FROM authors\n-- UNION removes duplicate rows, while UNION ALL does not.\n-- Additionally: INTERSECT and EXCEPT`,
    },
    {
        keyword: "Subquery",
        optionalComment: null,
        statement: `SELECT * FROM Customers\nWHERE Country IN (SELECT Country FROM Suppliers)\nAND salary > (SELECT AVG(revenue_generated) FROM sales_associates);`,
    },
    {
        keyword: "CASE",
        optionalComment: "-- CASE WHEN is basically an if-else statement.",
        statement: `SELECT OrderID, Quantity,\nCASE WHEN Quantity > 30 THEN 'The quantity is greater than 30'\nWHEN Quantity = 30 THEN 'The quantity is 30'\nELSE 'The quantity is under 30'\nEND AS QuantityText\nFROM OrderDetails;`,
    },
    {
        keyword: "EXPLAIN",
        optionalComment: "-- To do: learn more about EXPLAIN",
        statement: `EXPLAIN SELECT * FROM tableName`,
    },
    {
        keyword: "Self join",
        optionalComment: null,
        statement: `-- Work in progress`,
    },
    {
        keyword: "View",
        optionalComment: "-- Work in progress",
        statement: `CREATE VIEW`,
    },
    {
        keyword: "Window functions",
        optionalComment: "-- Work in progress\n-- https://sqlite.org/windowfunctions.html",
        statement: ``,
    },
    {
        keyword: "Query optimization & Query plan",
        optionalComment: null,
        statement: `-- Work in progress`,
    },
    {
        keyword: "Common Table Expression",
        optionalComment: null,
        statement: `-- Work in progress`,
    },
    {
        keyword: "Index",
        optionalComment: `-- Work in progress`,
        statement: `/* SQL finds the result of a query by doing either a "full table scan" or by using an index. A full table scan looks at every row in the table, while with an index a binary search is performed. Which method is faster depends on the data, its size, and how often a query will be executed.\nIf the table, for instance, is 10 million rows long, then a full table scan would require looking at all 10 million rows. Doing a binary search on a sorted table, with 10 millions rows, would only require 23 lookups to find a value. */`,
    },
    {
        keyword: "Stored procedure",
        optionalComment: "-- A reusable piece of SQL code, like a function.",
        statement: `-- Work in progress`,
    },
    {
        keyword: "INSERT INTO",
        optionalComment: null,
        statement: `INSERT INTO Customers VALUES (18, 'Henry', NULL, 'YG', 55);\nINSERT INTO Customers (CustomerId, CustomerName, CustomerCompany)\nVALUES (19, 'Jiaying', 'ABB'), (20, 'Gordon', NULL), (21, 'Ramsay', 'GKI);`,
    },
    {
        keyword: "UPDATE",
        optionalComment: null,
        statement: `UPDATE tableName\nSET colName1 = "updatedValue", colName2 = "anotherValue"\nWHERE colName2 = 27;`,
    },
    {
        keyword: "DELETE",
        optionalComment: null,
        statement: `DELETE FROM tableName\nWHERE <some_condition>`,
    },
    {
        keyword: "CREATE TABLE",
        optionalComment: null,
        statement: `CREATE TABLE IF NOT EXISTS tableName (\ncolName1 DataType TableConstraint(optional) DEFAULT default_value(optional),\ncolName2 DataType TableConstraint(optional) DEFAULT default_value(optional),\n);`,
    },
    {
        keyword: "Table constraints",
        optionalComment: null,
        statement: `NOT NULL\nUNIQUE\nDEFAULT\nCHECK\nPRIMARY KEY\nFOREIGN KEY`,
    },
    {
        keyword: "ALTER TABLE",
        optionalComment: null,
        statement: `ALTER TABLE tableName\nADD newColumn DataType TableConstraint(optional) DEFAULT default_value(optional)\nALTER TABLE tableName2\nDROP colName\nRENAME TO colName\nDROP TABLE IF EXISTS tableName;`,
    },
]