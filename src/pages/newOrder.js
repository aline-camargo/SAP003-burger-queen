import React from 'react';
import Navbar from '../components/Navbar/navbar';
import ResumeArea from '../components/OrderResume/OrderResume';
import MenuArea from '../components/MenuArea/MenuArea';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { db } from '../util/firebaseConfig';


const NewOrder = () => {
//     db.collection('menu-day').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   })
    return (
        <main>
        <Navbar />
        <div className={css(styles.container)}>
            <MenuArea />
            <ResumeArea />
        </div>
        </main>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '90vh',
        marginBottom: '0',
    }
})

export default NewOrder;