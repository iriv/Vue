var app = new Vue({
    el:'#app',
    data:{
        mes:'Hello',
        stage:{
            females:['Катя','Маша','Света'],
            males:['Ваня','Петя','Саня'],
            actions:['Поцеловать','Укусить','Погладить'],
            body:['Губы','Нос','Ухо']
        },
        focus:{
            females:0,
            males:0
        },
        steps:10
    },
    methods:{
        del:(key,obj)=>{
            obj.splice(key, 1);
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
        show:false,
        items:[
            {title:'Добавить'},
            {title:'Правила'}
        ]
    },
    methods:{
        hidemenu:function(){
            this.show=!this.show;
        }
    }
});