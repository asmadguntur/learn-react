import React from "react";

function ScoreBoard() {
  // List skor yang siap dipakai
  const scores = [100, 85, 95];

  // TODO: Buat arrow function bernama calcTotalScore
  // yang menerima parameter scoresArray
  // dan mengembalikan total penjumlahan elemennya (gunakan fungsi reduce)
  const calcTotalScore = (scoresArray) => {
    return scoresArray.reduce((total, score) => total + score, 0);
  };

  // TODO: Gunakan calcTotalScore dengan scores
  // lalu simpan hasilnya dalam variable totalScore

  // TODO: Cetak totalScore ke console
  // console.log('Total Score:', totalScore);

  return (
    <div className="score-container">
      <h2>Score Board</h2>
      {
        /* 
        TODO: Tampilkan totalScore di sini 
        Contoh: <p>Total Score: {totalScore}</p>
      */
        <p>Total Score: {calcTotalScore(scores)}</p>
      }
    </div>
  );
}
