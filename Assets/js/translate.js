function translate(lang, sentence)
{
 var into;
 if(lang === "es" || lang === "spanish")
 {into = "es";}
 else if(lang === "fr" || lang === "french")
 {into = "fr";}
 else if(lang === "ja" || lang ==="japanese")
 {into = "ja";}
 else if(lang === "de" || lang ==="german")
 {into ="de";}
 else if(lang === "pt" || lang === "portuguese")
 {into="pt";}

 $.ajax({
        url: 'http://www.frengly.com/',
        data:
   {
            src: 'en',
            dest: into,
            text: sentence,
            outformat: 'json',
            email: 'mattkun@gmail.com',
            password: 'matt222'
        },//end data object
        success: function(data)
   {
            $('#test').append(data.translation);
        },//end success
        error: function (errormessage)
   {
            $('#test').html(errormessage);
        }//end error message
    });//end ajax call
}//end translate function
