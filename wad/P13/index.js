const todolist = []; 
        todolist.push({id:"a"});
        
        todolist.push({id:"b" });
        
        todolist.push ({ id:"c"});
        todolist.push({ id: "d"});
        
        todolist.push({id:"e"});
        
        //dowment.getElement By Id ("de !! 
        console.log(todolist);
        
        const poppedItem = todolist.pop();
        
        console.log(poppedItem); 
        const filteredTodoList = todolist.filter(function(item)
        
        {
        
        return item.id !== "a";
        });
        console.log(filteredTodoList);