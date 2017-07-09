var app = new Vue({
    el:'#app',
    data:{
        mes:'Hello',
        stage:{
            females:['Света'],
            males:['Дима'],
//            actions:['Поцеловать','Укусить','Погладить'],
            actions:[{text:'act1роолр',checked:true},{text:'act2',checked:true},{text:'act3',checked:true},
                    {text:'act4',checked:false},{text:'act5',checked:false},{text:'act6',checked:false}],
            body:[{text:'act1',checked:true},{text:'act2',checked:true},{text:'act3',checked:true},
                    {text:'act4',checked:false},{text:'act5',checked:false},{text:'act6',checked:false}],
        },
        focus:{
            females:0,
            males:1     
        },
        steps:10
    },
    methods:{
        del:(key,obj)=>{
//            obj.splice(key, 1);
            obj[key].checked = false;
        },
        getRandomInt:function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        start:function(){
            for (val of Object.getOwnPropertyNames(app.stage)) {
                this.check(val);
            }
        },
        check:function(obj){
            
            console.log(obj); 
            return;
            
            let i=0;
            
            let interval = setInterval(function(){
                
                let val = this[obj].length-1;
                
                let index = this.getRandomInt(0,val);    
                
                this.focus[obj] = index;
                
                i++;
                
                if (i==this.steps){
                    clearInterval(interval);
                }
            }.bind(this),500);
        },
        showmenu:function(){
            menu.show = !menu.show;
        }
        
    }
});

var menu = new Vue({
    el:'#menu',
    data:{
        show:true,
        items:[
            {title:'Добавить'},
            {title:'Правила'}
        ],
        stage:app.stage
    },
    methods:{
        hidemenu:function(){
            this.show=!this.show;
        }
    },
    s:()=>alert(1)
});