"use client"

export default function ProgressCard({data}:{data:any[]}) {
    console.log(data);
  return (
    <>    
        {data && (
            data.map((item:any) => (
                <div key={item.id} className="card card-dash bg-base-100 shadow-md hover:shadow-5xl hover:shadow-base-300 hover:bg-gradient-to-r from-base-100 to-base-300">
                    
                    <div className="card-body flex flex-row justify-around items-center">
                        <div className="flex-[2]">
                            <h3 className="card-title mb-2 text-primary">{item.title}</h3>
                            <p className="text-sm lg:text-base">{item.description}</p>
                        </div>

                        <div className="radial-progress bg-primary text-primary-content border-primary border-4"
                            style={{ ["--value" as any]: item.value  } as React.CSSProperties } aria-valuenow={item.value} role="progressbar">
                            {item.value}
                        </div>
                    </div>
                </div>
            ))
        )}
    </>

  )
}
