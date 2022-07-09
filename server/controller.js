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

    postCompliment: (req, res) =>
    {
        // console.log(req.body)

        compliments.push(req.body.compliment)

        console.log(compliments)

        res.sendStatus(200);
    },

    getFortune: (req,res) =>
    {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    postFortune: (req, res) =>
    {
        console.log(req.body)

        fortunes.push(req.body.fortune)

        console.log(fortunes)
        if(fortuneNum === 0)
        {
            fortunes.shift();
        }

        fortuneNum++;

        res.sendStatus(200);
    },

    deleteFortune:(req,res) =>
    {   
        console.log(req)
        if(fortuneNum <= 0)
        {
            res.status(400).send(`cannot delete any more fortunes`)
        }
        else if(fortuneNum != 0)
        {
            lastFort = fortunes.pop();

            console.log(fortunes);

            res.status(200).send(lastFort);
            fortuneNum--;

            if(fortuneNum === 0)
            {
                fortunes[0] = `Enter a new fortune, you must`
            }
        }
        
        
    }

}