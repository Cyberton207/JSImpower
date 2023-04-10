let user = "admin"
switch (user)
{
    case "admin":
        console.log("You'll get the full access control");
        break;
    case "subadmin":
        console.log("You'll get limited access control")
        break;
    case "adminWorker":
        console.log("You'll Work Under Subadmin")
        break;
    case "userMan":
        console.log("No Permission")
        break;
}
function greet(name){

    console.log(`Hello There , ${name}`);
}
greet("Dnyaneshawari");