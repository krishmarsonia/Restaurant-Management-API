exports.getFoodList = (req, res, next) => {
        // const newError = new Error("Unable to send data")
        res.json([{
            id:1,
            name:"Machurian",
            price:150
        },{
            id:2,
            name:"panner tikka",
            price:180
        },{
            id:3,
            name:"Pav bhaji",
            price:100
        }, {
            id:4,
            name:"XYZ",
            price:500
        },{
            id:5,
            name: "ABC",
            price: 450
        }]);
    // res.status(401).json(newError);
   
}

exports.studentList = (req, res, next) => {
    res.json([
        {
            id: 1,
            studentName: "Rocky",
            marks: 56 
        },
        {
            id: 2,
            studentName: "Ash",
            marks: 65 
        },
        {
            id:3,
            studentName: "Shinchan",
            marks: 87
        }
    ])
}