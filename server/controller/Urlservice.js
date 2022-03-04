import URLS from "../models/Orilink.js";

export const CreateURLs = async(req,res)=>{
    try {
        const urls = await URLS.findOne({
            where:{
                OriginalLink : req.body.OriginalLink
            }
        });
        if(urls === null){
            const {OriginalLink , CostumeLink} = req.body
            await URLS.create({
                OriginalLink : OriginalLink,
                CostumeLink : CostumeLink
            });
            res.json("Success");
        }else if(urls.OriginalLink === req.body.OriginalLink){
            res.json(urls.CostumeLink)
        }
    } catch (error) {
        res.json(error)
        console.log(error)
    }
};

export const GetCostumeUrls = async (req,res)=>{
    try {
        const Urls= await URLS.findOne({
            where : {
                CostumeLink : req.params.CostumeLink
            }
        });
        res.redirect(Urls.OriginalLink);
    } catch (error) {
        console.log(error);
        res.json("Null Urls")
    }
}

