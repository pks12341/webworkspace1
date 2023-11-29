//sql문 모아놓은 파일
module.exports = {
    usersList: `SELECT * FROM t_users`,
    usersInsert: `INSERT INTO t_users SET ?`,
    usersUpdate: `UPDATE t_users SET ? WHERE user_no = ?`,
    usersDelete: `DELETE FROM t_users WHERE user_no = ?`,
    usersInfo: `SELECT * FROM t_users WHERE user_no = ?`
}