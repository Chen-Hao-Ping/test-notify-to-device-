import { mergeScan } from 'rxjs/operators';

interface user_interface {
  index: number;
  notify(String): void;
}
const Users = {
  userList: [],
  addUser: (user) => {
    Users.userList.push(user);
    console.log(`user ${user.index} is add`);
  },
  notifyObserver: (msg) => {
    Users.userList.forEach((obs) => {
      obs.notify(msg);
    });
  },
};

function getUser(id: number) {
  let user: user_interface = {
    index: id,
    notify: (msg) => {
      console.log(`by id = ${user.index} 的通知,${msg}`);
    },
  };
  Users.addUser(user);
}

getUser(10);
getUser(11);

Users.notifyObserver('Hello word');

getUser(12);
Users.notifyObserver('第二次群體通知');
