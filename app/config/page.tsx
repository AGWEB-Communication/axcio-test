import { createClient } from '@/utils/supabase/server';

export default async function page() {
  const supabase = createClient();
  const role = "admin"

  const { data: config } = await supabase.from("config").select();


  return (
    
    config && <p>Config Name : {config[0].configNom}</p>
  )
}
