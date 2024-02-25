import React from 'react';

const InputArea = ({ onProductChange, value, style  }) => {
  const handleChange = (event) => {
    // 入力値を親コンポーネントに通知する
    onProductChange(event.target.value);
  };
  // フォーム送信の処理をここに記述することもできます
  const handleSubmit = (event) => {
    event.preventDefault(); // フォームのデフォルト送信動作を防ぎます
    // 入力されたPRD_CDを取得するために、event.currentTargetを使用します
    let prdCd = event.currentTarget.elements.namedItem('prd_cd').value.trim();
    
      // 全ての文字が数字であり、13桁であることを確認
    if (/^\d{13}$/.test(prdCd)) {
      onProductChange(prdCd);
      console.log('Sending PRD_CD:', prdCd);
    } else {
      alert("商品コードは13桁の数字である必要があります。");
    }

    // 入力された数値が13桁で、末尾が数字であることを確認し、".0"を追加します
    if (prdCd.length === 13 && !isNaN(prdCd.slice(-1))) {
      prdCd += ".0";
    }
    
    onProductChange(prdCd);
    console.log('Sending PRD_CD:', prdCd); // 実際の送信処理に置き換えてください
  };

 // ボタン専用のスタイルを設定（背景色を含む）
 const buttonStyle = {
  ...style, // Page.tsx から渡されたスタイルを展開
  backgroundColor: '#007bff', // 例: スキャンと同じ色
};

return (
  <div className="px-5 py-5 mx-auto max-w-md text-center">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      <div className="text-xl font mb-1" style={{ fontSize: '16px' }}>OR</div>
      <input
        type="text"
        id="prd_cd"
        name="prd_cd"
        value={value}
        onChange={handleChange}
        placeholder="コードを入力"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        style={buttonStyle} // 修正済みスタイルを適用
      >
        検索
      </button>
    </form>
  </div>
);
};

export default InputArea;