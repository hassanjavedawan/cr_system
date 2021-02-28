import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const db = firestore().collection('Company Data');
const db1 = firestore().collection('Student Data');


const getCompanyData = () => {
    return (dispatich) => {
        let arr = [];
        db.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    arr.push(change.doc.data());
                    var js = JSON.stringify(arr);
                    var pr = JSON.parse(js);
                    console.log("Added: ", pr);
                    dispatich({ type: "Company", payload: pr })
                }
                if (change.type === "modified") {
                    console.log("Modified: ", pr);
                }
                if (change.type === "removed") {
                    console.log("Removed : ", pr);
                }
            });
        });
    }
}
const getStudentData = () => {
    return (dispatich) => {
        let arr = [];
        db1.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    arr.push(change.doc.data());
                    var js = JSON.stringify(arr);
                    var pr = JSON.parse(js);
                    console.log("Added: ", pr);
                    dispatich({ type: "student", payload: pr })
                }
                if (change.type === "modified") {
                    console.log("Modified: ", pr);
                }
                if (change.type === "removed") {
                    console.log("Removed : ", pr);
                }
            });
        });
    }
}


const curruntUserData = () => {
    var user = auth().currentUser;
    return (dispatich) => {
        let arr = [];
        db.doc(user.uid).onSnapshot(snapshot => {
            arr.push(snapshot.data());
            var js = JSON.stringify(arr);
            var pr = JSON.parse(js);
            console.log("Added: ", pr);
            dispatich({ type: "currunt", payload: pr })
        });
    }

}

const curruntUserData1 = () => {
    var user = auth().currentUser;
    return (dispatich) => {
        let arr = [];
        db1.doc(user.uid).onSnapshot(snapshot => {
            arr.push(snapshot.data());
            var js = JSON.stringify(arr);
            var pr = JSON.parse(js);
            console.log("Added: ", pr);
            dispatich({ type: "currunt1", payload: pr })
        });
    }

}


export {
    getCompanyData, curruntUserData, curruntUserData1, getStudentData
}