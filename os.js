const os=require('os')
 //user
//  console.log(os.userInfo())
//  console.log(os.hostname())
 const osObj={
    name:os.userInfo(),
    host:os.hostname(),
    platform:os.platform(),
    release:os.release(),
    time:os.uptime()
 }
 console.log(osObj)