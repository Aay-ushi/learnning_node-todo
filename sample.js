// const {Pool,Client}=require('pg');
// const connectionvar='postgresql://postgres:root@db:5432/demo';

// const client= new Client({
// connectionvar
// });

// client.connect();
// client.query('SELECT * from Slno',(err,res)=>{
//     console.log(err,res);
//     client.end()
// });


var express=require('express'),
    cons=require('consolidate'),
    
    yargs=require('yargs'),
    hbs=require('hbs'); 
const { Pool }=require('pg');
var name='abc', post='intern';
var querystatement=`INSERT INTO public."demo-table2" VALUES (49,'${name}','${post}')`;

var config={
    user:'postgres',
    database: 'postgres',
    password:'root',
    host: 'localhost',
    port: '5432',
};

const pool=new Pool(config);
pool.on('error',function(err,client){
    console.error('idle client error',err.message,err.stack);
});

pool.query(querystatement,(err,res)=>{
    if(err) {
        return console.error('error running query', err);
    }
     console.log('Query successful');
        
})


var app=express();

//DB Connection String
var connect="postgres://abc:root@localhost/demo";

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname +'/views/partials');


app.get('/',(req,res)=>{
    console.log('Server Working successfully');
    res.render('home.hbs');
})
app.listen(3000,()=>{
console.log('server started');
});
