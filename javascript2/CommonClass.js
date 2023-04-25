class MyDocument
{
    $(tagid)
    {
        return document.getElementById(tagid);
    }
    html(tagid,text=null)
    {
        console.log(text);
        if(text==null)
            return this.$(tagid).innerHTML;
        else
            this.$(tagid).innerHTML+=text;
    }
    
}