export function Headline(props) {
  return (
    <>
        <h1>{ props.page }</h1>
        <button onClick={ props.onClick }>ボタン</button>
        {props.children}
    </>
  )
}