const admins = [
    {
        id: 300,
        name: 'admin1'
    },
    {
        id: 302,
        name: 'admin2'
    }
];

const isAdmin = (userId) => {
    const adminUsers = admins.map(admin => admin.id );
    if(adminUsers.includes(userId)) {
        return 'is Admim';
    }
}

isAdmin(302);