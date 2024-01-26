import classes from './detailClass.module.css'

export default function DetailClass() {
    return (
        <div>
        
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Class name</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>ABC</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>About</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                            Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes.
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Start date</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>26/1/2024</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>End date</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>5/2/2024</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Status</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>Waiting</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Fee</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                            30%, collected after the first lesson, collected once only.
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Session</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                            2 sessions
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typographyTitle}>Major</dt>
                        <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                            <ul>
                                <li>International Business</li>
                                <li>MKT304</li>
                            </ul>

                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
