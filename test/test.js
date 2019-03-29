const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Burrito = require('../models/burrito');

describe('Burrito model', () => {
    // happy path 👍🏼
    it('should be able to retreive by id', async () => {
        const theBurrito = await Burrito.getById(3);
        theBurrito.should.be.an.instanceOf(Burrito);
        // theBurrito.should.have.length(1);
    });
    // sad path 👎🏼
    it('should error if no Burrito by id', async () => {
        const theBurrito = await Burrito.getById(324);
        expect(theBurrito).to.be.null;
        // theBurrito.should.be.an.instanceOf(Burrito);
        // theBurrito.should.have.length(1);
    });
    it('should update the Burrito', async () => {
        // grab a Burrito with id 2
        const theBurrito = await Burrito.getById(2);
        // update the email
        theBurrito.fillings = 'beans';
        // save the Burrito
        await theBurrito.save();
        const alsoTheBurrito = await Burrito.getById(2);
        expect(alsoTheBurrito.fillings).to.equal('beans');
    });
    it('should remove a Burrito by id', async () => {
        await Burrito.delete(6);
        const alsoTheBurrito = await Burrito.getById(6);
        expect(alsoTheBurrito).to.be.null;
    });
    it('should create a new Burrito', async () => {
        const fillings = "emu";
        const style = "wrap";
        const newBurrito = await Burrito.makeMeABurrito(fillings,style);
        newBurrito.should.be.an.instanceOf(Burrito);
    });
});
