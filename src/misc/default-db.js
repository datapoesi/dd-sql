
function defaultDB() {
    initSqlJs().then(SQL => {
      db = new SQL.Database();
    
      db.run("CREATE TABLE test (col1, col2);");
      db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);
      const statement = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
      statement.getAsObject({$start:1, $end:1});
      statement.bind({$start:1, $end:2});
      while(statement.step()) {
        const row = statement.getAsObject();
        console.log('Here is a row: ' + JSON.stringify(row));
      }
      statement.free()
    
      db.run("CREATE TABLE hello (a int, b char); INSERT INTO hello VALUES (0, 'hello'), (1, 'world');");
      const statement2 = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");
      statement2.getAsObject({':aval' : 1, ':bval' : 'world'});
      statement2.bind([0, 'hello']);
      while (statement2.step()) {
        console.log(statement2.get());
        console.log(statement2.getAsObject({':aval' : 1, ':bval' : 'world'}))
      }
      statement2.free()
    
      const res = db.exec("SELECT * FROM hello");
      console.log(res)
    }).catch(err => console.log(err))
}