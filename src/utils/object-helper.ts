export const updateObjectInArray = (users: any, userId: any, objPropName: any, newObjProps: any) => {
    return users.map((u: any) => {
        if (u[objPropName] === userId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
};
