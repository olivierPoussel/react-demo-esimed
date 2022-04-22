export function handleForm(event, observable, majFunction) {
    const key = event.target.name
    const value = event.target.value
    majFunction({ ...observable, [key]: value })
}
