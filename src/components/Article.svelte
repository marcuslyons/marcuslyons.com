<script>
  import { format, parseISO } from "date-fns"
  export let title
  export let date
</script>

<h2>{title}</h2>
<p>{format(parseISO(date), "MMMM d yyyy")}</p>
<slot />
