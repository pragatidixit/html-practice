function divide(a,b,callback)
{
    if(b==0)
    {
        callback("Error 0 division",null);
        return ;
    }

    let result=a/b;
    callback(null,result);
}

function resulthandle(error,result)
{
    if(error)
    {
        console.log("error");
        return;
    }
    console.log(result);
}

divide(4,2,resulthandle);
divide(4,0,resulthandle);
