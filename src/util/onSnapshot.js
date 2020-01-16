import { db } from './firebaseConfig';
import notification from '../components/notifications';

export const onSnapshot = (location, setState) => {
  db.collection(location) 
    .orderBy('time', 'desc')
    .onSnapshot(
      { includeMetadataChanges: !navigator.onLine },
      (querySnapshot) => {
        const totalOrders = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        setState(totalOrders);
      }
    );
};

export const forward = (to, doc, from, id, message, setState) => { 
  db.collection(to)
    .add(doc)
    .then(
      db
        .collection(from)
        .doc(id)
        .delete()
        .catch((error) => {
          notification({
            title: 'Falha em remover da ' + message + '.',
            message: error,
            type: 'danger'
          });
        })
    )
    .then(
      notification({
        title: 'Pedido finalizado com sucesso!',
        message: 'Obrigada!',
        type: 'success'
      })
    )
    .then(setState([]));
};

export default { onSnapshot, forward };
