//array variables in place of database. 
//needing to be global so functions can edit
let compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
let fortunes = [`Enter a new fortune, you must`]
let fortuneNum = 0;

module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    //added ability to add to our compliments array
    postCompliment: (req, res) =>
    {
        // console.log(req.body)

        compliments.push(req.body.compliment)

        console.log(compliments)

        res.sendStatus(200);
    },

    //added getFortune similar to getCompliment. does the same

    getFortune: (req,res) =>
    {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    //added  abilty to add to our fortunes array
   
    postFortune: (req, res) =>
    {
        console.log(req.body)

        fortunes.push(req.body.fortune)

        console.log(fortunes)
         //if first time adding to fortunes array remove default message
        if(fortuneNum === 0)
        {
            fortunes.shift();
        }

        fortuneNum++;

        res.sendStatus(200);
    },
    
    //added ability to delete the last fortune added to array
    deleteFortune:(req,res) =>
    {   
        console.log(req)
        //if fortune array is empty send error when trying to delete
        if(fortuneNum <= 0)
        {
            res.status(400).send(`cannot delete any more fortunes`)
        }
        //if not empty remove last fortune
        else if(fortuneNum != 0)
        {
            lastFort = fortunes.pop();

            console.log(fortunes);

            res.status(200).send(lastFort);
            fortuneNum--;
            //if empty after delete re-add default message
            if(fortuneNum === 0)
            {
                fortunes[0] = `Enter a new fortune, you must`
            }
        }
        
        
    }

}