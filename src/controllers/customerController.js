const controller = {}

controller.list = (req,res)=>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuarios',(err,user) =>{
            res.render('customers',{//customers hace referencia al archivo ejs
                data: user
            })
        }); 
    });
}

controller.add = (req,res)=>{
    data= req.body; 
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO usuarios set?',[data],(err,rows)=>{
            res.redirect('/');  
        }); 
    }); 
}

controller.delete = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM usuarios WHERE id = ?',[id],(err,rows)=>{
            res.redirect('/'); 
        })
    }) 
}


controller.editar= (req,res)=>{
    const {id} = req.params; 
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuarios WHERE id = ?',[id],(err,rows)=>{
            res.render('formEdit',{
                data :rows
            })
        })
    })
}


controller.update = (req,res)=>{
    const {id} = req.params; 
    const newdata = req.body; 
    req.getConnection((err,conn)=>{
        conn.query('UPDATE usuarios set ? WHERE id = ?',[newdata,id],(err,rows)=>{
            res.redirect('/'); 
        })
    });
}

module.exports =controller; 