
module.exports = {
    boardList: `SELECT B.NO, B.TITLE, B.WRITER, B.CREATED_DATE, IFNULL(A.CNT, 0) AS CNT
	                        FROM (
	                        	    SELECT BNO, COUNT(BNO) AS CNT
	                        		FROM T_COMMENT_BOARD
                                    GROUP BY BNO
                            ) AS A
	                        RIGHT JOIN T_BOARD_BOARD AS B ON A.BNO = B.NO;`,

    boardInsert: `INSERT INTO T_BOARD_BOARD SET ?`,

    boardUpdate: `UPDATE t_BOARD_BOARD 
                         SET  ? WHERE NO = ?`,

    boardInfo: `SELECT B.NO,
	          B.TITLE,
              B.WRITER,
              B.CREATED_DATE,
              B.CONTENT,
               C.NO
            from T_BOARD_BOARD AS B
            LEFT join T_COMMENT_BOARD AS C ON B.NO = C.BNO
            where B.no = ?`

}