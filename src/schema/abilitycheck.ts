export interface AbilityCheck {
    /**
     * Lowercase ability name included in the check.
     * Used to look up ability by id.
     */
    ability?: string;

    /**
     * id reference to tool or skill involved in the check.
     */
    proficiency?: string;

    /**
     * The DC of the check.
     * @type integer
     * @minimum 1
     * @maximum 30
     */
    dc: number;

    /**
     * Description of the task that prompted the check and/or the results.
     */
    description: string;
}