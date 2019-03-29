const db = require('./conn');

class Burrito {
    constructor(id, fillings, style){
        // In python it was "self," here it's "this"
        this.id = id;
        this.fillings = fillings;
        this.style = style;
    }
    static getAll(){
        return db.any(`select * from burritos`);
    }
    static getById(id){
        return db.one(`select * from burritos where id = $1`, [id])
            .then( (burritoData) => {
                return new Burrito(burritoData.id, burritoData.fillings, burritoData.style);
            })
            .catch(() => {
                return null; // no burrito by that id!
            });
    }
    changeFilling(newFilling){
        this.fillings = newFilling;
    }
    changeStyle(newStyle){
        this.style = newStyle;
    }
    save(){
        return db.result(`update burritos set 
            fillings='${this.fillings}',
            style='${this.style}'
        where id=${this.id}
        `);    
    }
    static delete(id){
        return db.result(`delete from burritos where id=$1`, [id]);
    }
    static makeMeABurrito(fillings,style){
        return db.one(`insert into burritos
            (fillings, style) 
        values
            ($1, $2)
        returning *`, [fillings, style])
        .then((newBurrito) => {
            return new Burrito(newBurrito.id, newBurrito.fillings, newBurrito.style);
        });
    }
}

module.exports = Burrito;
